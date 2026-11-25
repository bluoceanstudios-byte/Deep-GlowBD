/**
 * Media & URL helpers (rewritten to local static mirror paths; zero live CDN dependencies)
 */

const DRIVE_TEAM_MAP = {
  "1TO79V0FtUdr8gdCen4fE-CgJrgLtqmhi": "/res.cloudinary.com/dyyrjhuho/team/towfiq-islam.jpg",
  "13M3kYDoPKS5mfBmsIfyp3c7LAuaA4o28": "/res.cloudinary.com/dyyrjhuho/team/saad-alam.jpg",
  "16RTJlR6MJFEVuPfdHWtI-Wuz-MeonUQo": "/res.cloudinary.com/dyyrjhuho/team/tawhid-nafis.jpg",
  "1yTA6KoQoG5XmYwwIusRjdM_9taFXZtWW": "/res.cloudinary.com/dyyrjhuho/team/mahmudur-rahman.jpg",
  "1tjqLGnhwFmxv1Yu8_SzUMniGUZMmnEco": "/res.cloudinary.com/dyyrjhuho/team/fahim-rahman.jpg",
};

export function extractYouTubeId(url) {
  if (!url) return null;
  const str = String(url).trim();
  const m =
    str.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/) ||
    str.match(/[?&]v=([A-Za-z0-9_-]{6,})/) ||
    str.match(/youtube(?:-nocookie)?\.com\/(?:embed|shorts)\/([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
}

export function toLocalAssetUrl(url) {
  if (!url) return "";
  const str = String(url).trim();
  for (const [driveId, localPath] of Object.entries(DRIVE_TEAM_MAP)) {
    if (str.includes(driveId)) return localPath;
  }
  const cdnMatch = str.match(/^https?:\/\/(res\.cloudinary\.com|img\.youtube\.com|i\.ytimg\.com)\/(.*)$/);
  if (cdnMatch) {
    return `/${cdnMatch[1]}/${cdnMatch[2]}`;
  }
  return str;
}

export function resolveProjectThumbnail(project) {
  if (!project) return "/i.ytimg.com/vi/F4zKWosGHQ4/maxresdefault.jpg";
  if (project.thumbnailUrl) {
    return toLocalAssetUrl(project.thumbnailUrl);
  }
  const ytId = extractYouTubeId(project.videoUrl);
  if (ytId === "F4zKWosGHQ4") {
    return "/i.ytimg.com/vi_webp/F4zKWosGHQ4/maxresdefault.webp";
  }
  if (ytId) {
    return `/i.ytimg.com/vi/${ytId}/maxresdefault.jpg`;
  }
  return "/i.ytimg.com/vi/F4zKWosGHQ4/maxresdefault.jpg";
}

export function cleanProjectTitle(title) {
  if (!title) return "";
  return String(title)
    .replace(/^\s*BD\s+Skip navigation\s+acs ovc\s+Create\s+Avatar image\s*/i, "")
    .trim();
}
