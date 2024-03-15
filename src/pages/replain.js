import { useEffect } from "react";

const ReplainWidget = () => {
  useEffect(() => {
    window.replainSettings = { id: "9a0cd693-626d-41a7-9b78-c5748a366b69" };
    (function (u) {
      var s = document.createElement("script");
      s.async = true;
      s.src = u;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    })("https://widget.replain.cc/dist/client.js");
  }, []);

  return null;
};

export default ReplainWidget;
