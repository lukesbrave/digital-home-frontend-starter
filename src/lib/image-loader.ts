type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const SUPABASE_OBJECT_PATH = "/storage/v1/object/public/";
const SUPABASE_RENDER_PATH = "/storage/v1/render/image/public/";

export function getOptimizedImageUrl(
  src: string,
  width: number,
  quality = 75,
) {
  try {
    const url = new URL(src);
    if (!url.pathname.includes(SUPABASE_OBJECT_PATH)) {
      return src;
    }

    url.pathname = url.pathname.replace(SUPABASE_OBJECT_PATH, SUPABASE_RENDER_PATH);
    url.searchParams.set("width", String(width));
    url.searchParams.set("quality", String(quality));
    return url.toString();
  } catch {
    return src;
  }
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  return getOptimizedImageUrl(src, width, quality || 75);
}
