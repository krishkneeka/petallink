import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { generateSlug } from "@/lib/slug";

export async function POST(request) {
  try {
    const body = await request.json();
    const { recipientName, fromName, message, backgroundColor, flowers } = body;

    // Validate
    if (!flowers || !Array.isArray(flowers) || flowers.length === 0) {
      return NextResponse.json({ error: "At least one flower is required" }, { status: 400 });
    }
    if (flowers.length > 10) {
      return NextResponse.json({ error: "Maximum 10 flowers allowed" }, { status: 400 });
    }

    // Generate unique slug with retry (maybeSingle avoids error when no row found)
    let slug;
    let attempts = 0;
    while (attempts < 5) {
      slug = generateSlug(8);
      const { data: existing } = await supabase
        .from("bouquets")
        .select("id")
        .eq("id", slug)
        .maybeSingle();

      if (!existing) break;
      attempts++;
    }

    const insertData = {
      id: slug,
      recipient_name: recipientName || "",
      from_name: fromName || "",
      message: message || "",
      background_color: backgroundColor || "#F8C8DC",
      flowers: flowers,
    };

    console.log("Inserting bouquet:", slug);

    // Insert into Supabase
    const { data, error } = await supabase
      .from("bouquets")
      .insert(insertData)
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Failed to save bouquet", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ slug: data.id, url: `/b/${data.id}` });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}
