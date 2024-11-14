module.exports = {
  fn: async function () {
    const sampleData = [
      "https://stc-zmp.zadn.vn/zaui-fashion/home/cover.webp",
      "https://stc-zmp.zadn.vn/zaui-fashion/home/cover.webp",
      "https://stc-zmp.zadn.vn/zaui-fashion/home/cover.webp"
    ];
    const res = this.res;
    return res.ok(sampleData);
  },
};
