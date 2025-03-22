export async function fetchData(
    size?: string | null,
    onRoad?: string,
    heavyWaste?: string
  ): Promise<ISkip[]> {
    const response = await fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft",
      {
        next: {
          tags: ["skips"], 
        },
      }
    );
    const skips: ISkip[] = await response.json();
  
    // Convert "true"/"false" strings to actual booleans
    const isOnRoad = onRoad === "true";
    const isHeavyWaste = heavyWaste === "true";
  
    return skips.filter(
      (skip) =>
        (!size || skip.size >= Number(size)) &&
        (!isOnRoad || skip.allowed_on_road) &&
        (!isHeavyWaste || skip.allows_heavy_waste)
    );
  }