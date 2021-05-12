import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 定义资源
const resources = {
    "en-us": {
        translation: require("./en/translation.json")
    },
    "zh-cn": {
        translation: require("./zh/translation.json")
    }
} as const;

// 初始化
i18n
    .use(initReactI18next).init({
        fallbackLng: "en-us",
        lowerCaseLng: true,
        resources: resources
    });

export default i18n;