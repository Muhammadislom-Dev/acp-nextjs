import { useEffect } from "react";

const ReplainWidget = () => {
  useEffect(() => {
    window.replainSettings = { id: "840bd182-0d19-4c58-b49d-d4bacf447257" };
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
