"use server";

import { revalidateTag } from "next/cache";

export async function revalidateSkips() {
  revalidateTag("skips");
}
