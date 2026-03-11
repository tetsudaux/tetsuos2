import type { NextConfig } from "next";
import { execSync } from "child_process";

const gitCommit = (() => {
  try {
    return execSync("git log -1 --pretty=format:'%h — %s (%ci)'").toString().trim();
  } catch {
    return "unknown";
  }
})();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_GIT_COMMIT: gitCommit,
  },
};

export default nextConfig;
