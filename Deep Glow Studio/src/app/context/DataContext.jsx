import React, { createContext, useContext, useEffect, useState } from "react";

const EMPTY_DATA = {
  settings: null,
  projects: [],
  teamMembers: [],
  services: [],
  processSteps: [],
  testimonials: [],
  trustedBrands: [],
  blogPosts: [],
  albums: [],
  content: {},
};

const DataContext = createContext({ data: EMPTY_DATA, loading: false });

export function DataProvider({ children }) {
  const initial =
    typeof window !== "undefined" && window.__INIT_DATA__ ? window.__INIT_DATA__ : null;
  const [data, setData] = useState(initial || EMPTY_DATA);
  const [loading, setLoading] = useState(!initial);

  useEffect(() => {
    if (initial) return;
    let active = true;
    fetch("/api/init-data.json")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("init-data failed"))))
      .then((payload) => {
        if (active) {
          setData({ ...EMPTY_DATA, ...payload });
          setLoading(false);
        }
      })
      .catch(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [initial]);

  return <DataContext.Provider value={{ data, loading }}>{children}</DataContext.Provider>;
}

export function useSiteData() {
  return useContext(DataContext);
}
