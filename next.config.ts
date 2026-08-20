import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Без этого `next dev`/`next build` дописывают свой служебный блок в AGENTS.md.
  agentRules: false,
};

export default nextConfig;
