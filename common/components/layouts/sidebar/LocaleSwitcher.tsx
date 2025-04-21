import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "np",
          label: t("np"),
        },
      ]}
      label={t("label")}
    />
  );
};

export default LocaleSwitcher;
