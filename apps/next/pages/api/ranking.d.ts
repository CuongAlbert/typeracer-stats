import type { NextApiRequest, NextApiResponse } from 'next';
export declare const usersData: readonly [{
    readonly userName: "cinoss";
    readonly fullName: "Đặng Tiến Cường";
}, {
    readonly userName: "phieulong97";
    readonly fullName: "Nguyễn Quang Nhật";
}, {
    readonly userName: "kiettrantuan";
    readonly fullName: "Trần Tuấn Kiệt";
}, {
    readonly userName: "long29031997";
    readonly fullName: "Phạm Tấn Bảo Long";
}, {
    readonly userName: "cuongalbert";
    readonly fullName: "Nguyễn Đăng Cường";
}, {
    readonly userName: "tunglam308";
    readonly fullName: "Bùi Tùng Lâm";
}, {
    readonly userName: "htinhtu";
    readonly fullName: "Hình Tinh Tú";
}, {
    readonly userName: "vincestone133";
    readonly fullName: "Nguyễn Quang Sơn";
}, {
    readonly userName: "NicolasWillyam";
    readonly fullName: "Huy Hoàng";
}];
export type contestRankingType = {
    userName: string;
    fullName: string;
    ranking: (number | '')[];
}[];
export default function handler(req: NextApiRequest, res: NextApiResponse): Promise<void>;
//# sourceMappingURL=ranking.d.ts.map