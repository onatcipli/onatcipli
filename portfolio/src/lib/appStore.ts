import { AppStoreData, AppConfig, MergedAppData } from "@/types";

const ITUNES_LOOKUP_URL = "https://itunes.apple.com/lookup";

export async function fetchAppStoreData(
  appId: string,
  country: string = "us"
): Promise<AppStoreData | null> {
  try {
    const response = await fetch(
      `${ITUNES_LOOKUP_URL}?id=${appId}&country=${country}`,
      { next: { revalidate: 86400 } } // Cache for 24 hours
    );

    if (!response.ok) {
      console.error(`Failed to fetch app ${appId}: ${response.status}`);
      return null;
    }

    const data = await response.json();

    if (data.resultCount === 0) {
      console.warn(`No results found for app ${appId}`);
      return null;
    }

    return data.results[0] as AppStoreData;
  } catch (error) {
    console.error(`Error fetching app ${appId}:`, error);
    return null;
  }
}

export async function fetchAllApps(
  apps: AppConfig[],
  country: string = "us"
): Promise<MergedAppData[]> {
  const results = await Promise.all(
    apps.map(async (app) => {
      const storeData = await fetchAppStoreData(app.appId, country);
      return {
        ...app,
        storeData: storeData || undefined,
      };
    })
  );

  return results;
}

export function formatDownloads(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

export function formatFileSize(bytes: string): string {
  const size = parseInt(bytes, 10);
  if (size >= 1073741824) {
    return `${(size / 1073741824).toFixed(1)} GB`;
  }
  if (size >= 1048576) {
    return `${(size / 1048576).toFixed(1)} MB`;
  }
  return `${(size / 1024).toFixed(1)} KB`;
}

export function getStarRating(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return "★".repeat(fullStars) + (hasHalfStar ? "½" : "") + "☆".repeat(emptyStars);
}
