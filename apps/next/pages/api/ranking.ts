// import { generateCsv, mkConfig } from "export-to-csv";
import type { NextApiRequest, NextApiResponse } from 'next'

export const usersData = [
  {
    userName: 'cinoss',
    fullName: 'Đặng Tiến Cường',
  },
  {
    userName: 'phieulong97',
    fullName: 'Nguyễn Quang Nhật',
  },
  {
    userName: 'kiettrantuan',
    fullName: 'Trần Tuấn Kiệt',
  },
  {
    userName: 'long29031997',
    fullName: 'Phạm Tấn Bảo Long',
  },
  {
    userName: 'cuongalbert',
    fullName: 'Nguyễn Đăng Cường',
  },
  {
    userName: 'tunglam308',
    fullName: 'Bùi Tùng Lâm',
  },
  {
    userName: 'htinhtu',
    fullName: 'Hình Tinh Tú',
  },
  {
    userName: 'vincestone133',
    fullName: 'Nguyễn Quang Sơn',
  },
  {
    userName: 'NicolasWillyam',
    fullName: 'Huy Hoàng',
  },
] as const

// export type contestRankingType = {
//   userName: string
//   fullName: string
//   ranking: (number | '')[]
// }[]
// ;[]

// function getContestNameData(data: { data: any }): string[] {
//   const dataContestName = data.data.userContestRankingHistory.slice(438)
//   return dataContestName.map((d: { contest: { title: string } }) => d.contest.title)
// }

// function getRankingData(data: any): number[] {
//   const dataRank = data.data.globalRanking
//   return dataRank.map((d: { ranking: number | '' }) => (d.ranking !== 0 ? d.ranking : ''))
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let rankingTable: Record<string, number | string>[] = []
  // contest name
  // const contestNameRes = await fetch(
  //   'https://leetcode.com/graphql?query=query%20userContestRankingInfo%28%24username%3A%20String%21%29%20%7B%0A%20%20userContestRanking%28username%3A%20%24username%29%7B%0AglobalRanking%0A%7D%0A%20%20userContestRankingHistory%28username%3A%20%24username%29%20%7B%0A%20%20%20%20contest%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%22username%22%3A%22cinoss%22%7D&r=2'
  // )
  // const contestNameData = await contestNameRes.json()
  // const contestName = getContestNameData(contestNameData)

  // // contest ranking
  const contestRanking = await Promise.all(
    usersData.map(async (u) => {
      const contestRankRes = await fetch(
        `https://leetcode.com/graphql?query=query%20userContestRankingInfo%28%24username%3A%20String%21%29%20%7B%0A%20%20userContestRanking%28username%3A%20%24username%29%7B%0AglobalRanking%0A%7D%0A%20%20userContestRankingHistory%28username%3A%20%24username%29%20%7B%0A%20%20%20%20ranking%0A%20%20%7D%0A%7D%0A&variables=%7B%22username%22%3A%22${u.userName}%22%7D&r=2`
      )
      const contestRankData = await contestRankRes.json()
      return {
        userName: u.userName,
        fullName: u.fullName,
        'global ranking': contestRankData.data.userContestRanking.globalRanking,
      }
    })
  )

  // merge contest name and user's ranking to array data

  // for (let i = 0; i < contestName.length; i++) {
  //   let rankingEl = { contest: contestName[i] }
  //   for (let j = 0; j < contestRanking.length; j++) {
  //     let user = contestRanking[j].userName
  //     Object.assign(rankingEl, { [user]: contestRanking[j].ranking[i] })
  //   }
  //   rankingTable.push(rankingEl)
  // }

  res.status(200).json(contestRanking)
}
