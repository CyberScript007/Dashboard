import { Suspense, lazy, useEffect, useState } from "react";
import loadIcon from "../utils/loadIcon";

function DynamicIcon({ library, iconName, ...props }) {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(
    function () {
      const fetchIcon = async () => {
        const icon = await loadIcon(library, iconName);
        setIconComponent(() => icon);
      };
      fetchIcon();
    },
    [library, iconName],
  );

  return IconComponent ? <IconComponent {...props} /> : null;
}

export default DynamicIcon;
