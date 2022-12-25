const { override, useBabelRc } = require('customize-cra');
module.export = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(), //->lúc này có thể báo lỗi vì nhầm là hook, bấm vào phần thông báo lỗi đó và fix là không phải là hook
);
