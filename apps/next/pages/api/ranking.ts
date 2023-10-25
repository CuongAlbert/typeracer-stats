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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const contestRanking = await Promise.all(
    usersData.map(async (u) => {
      const contestRankRes = await fetch(
        `https://leetcode.com/graphql?query=query%20userContestRankingInfo%20%7B%0A%20%20userContestRanking%28username%3A%20%22${u.userName}%22%29%20%7B%0A%20%20%20%20globalRanking%0A%20%20%7D%0A%7D`
      )
      const contestRankData = await contestRankRes.json()
      return {
        userName: u.userName,
        fullName: u.fullName,
        'global ranking': contestRankData.data.userContestRanking.globalRanking,
      }
    })
  )
  res.status(200).json(contestRanking)
}
