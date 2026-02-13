import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request, context) {
  try {
    // In Next.js 14+, params may need to be awaited
    const { id } = context.params;

    console.log("Fetching bouquet:", id);

    const { data, error } = await supabase
      .from("bouquets")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error("Supabase fetch error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: "Bouquet not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: data.id,
      recipientName: data.recipient_name,
      fromName: data.from_name,
      message: data.message,
      backgroundColor: data.background_color,
      flowers: data.flowers,
      createdAt: data.created_at,
    });
  } catch (err) {
    console.error("API GET error:", err);
    return NextResponse.json({ error: "Internal server error", details: err.message }, { status: 500 });
  }
}