

module.exports = {
  fn: async function () {
    const sampleData = [
      {
        id: 1,
        name: "Áo len",
        image: "https://stc-zmp.zadn.vn/zaui-fashion/category/ao-len.webp",
      },
      {
        id: 2,
        name: "Blazer",
        image: "https://stc-zmp.zadn.vn/zaui-fashion/category/blazer.webp",
      },
      {
        id: 3,
        name: "Đầm",
        image: "https://stc-zmp.zadn.vn/zaui-fashion/category/dam.webp",
      },
      {
        id: 4,
        name: "Áo phông",
        image: "https://stc-zmp.zadn.vn/zaui-fashion/category/ao-phong.webp",
      },
      {
        id: 5,
        name: "Áo gi lê",
        image: "https://stc-zmp.zadn.vn/zaui-fashion/category/ao-gile.webp",
      },
      {
        id: 6,
        name: "Chân váy",
        image: "https://stc-zmp.zadn.vn/zaui-fashion/category/chan-vay.webp",
      },
      {
        id: 7,
        name: "Quần short",
        image: "https://stc-zmp.zadn.vn/zaui-fashion/category/quan-short.webp",
      },
      {
        id: 8,
        name: "Quần bò",
        image: "https://stc-zmp.zadn.vn/zaui-fashion/category/quan-jean.webp",
      },
      {
        id: 9,
        name: "Túi xách",
        image: "https://stc-zmp.zadn.vn/zaui-fashion/category/tui-xach.webp",
      },
      {
        id: 10,
        name: "Phụ kiện",
        image: "https://stc-zmp.zadn.vn/zaui-fashion/category/phu-kien.webp",
      },
    ];
    const res = this.res;
    return res.ok(sampleData);
  },
};