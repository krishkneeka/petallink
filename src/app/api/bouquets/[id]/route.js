import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET(req, context) {
  try {
    // ✅ params is a Promise in your Next version
    const params = await context.params;
    let id = params?.id;

    if (Array.isArray(id)) id = id[0];
    if (!id) {
      return NextResponse.json({ error: "Missing id param" }, { status: 400 });
    }

    id = decodeURIComponent(id);

    const { data, error } = await supabase
      .from("bouquets")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      return NextResponse.json(
        { error: "Database error", details: error.message },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json({ error: "Bouquet not found", debug: { id } }, { status: 404 });
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
    return NextResponse.json(
      { error: "Internal server error", details: err?.message ?? String(err) },
      { status: 500 }
    );
  }
}
