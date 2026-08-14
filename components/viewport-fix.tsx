"use client";

import { useEffect } from "react";

/**
 * 真实视口适配：用 JS 读取设备实际像素尺寸，写入 CSS 变量，
 * 避免 vw/dvh 等单位在不同浏览器上的计算误差。
 */
export function ViewportFix() {
  useEffect(() => {
    function setRealViewport() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      document.documentElement.style.setProperty("--real-vw", `${width}px`);
      document.documentElement.style.setProperty("--real-vh", `${height}px`);
    }

    setRealViewport();
    window.addEventListener("resize", setRealViewport);
    window.addEventListener("orientationchange", setRealViewport);

    return () => {
      window.removeEventListener("resize", setRealViewport);
      window.removeEventListener("orientationchange", setRealViewport);
    };
  }, []);

  return null;
}
