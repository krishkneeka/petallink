-- ==========================================
-- PetalLink — Supabase Database Setup
-- ==========================================
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard → SQL Editor → New Query
-- ==========================================

-- Create the bouquets table
CREATE TABLE IF NOT EXISTS bouquets (
  id TEXT PRIMARY KEY,                         -- 8-char alphanumeric slug
  recipient_name TEXT NOT NULL DEFAULT '',
  from_name TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  background_color TEXT NOT NULL DEFAULT '#F8C8DC',
  flowers JSONB NOT NULL DEFAULT '[]'::jsonb,  -- Array of {type, x, y}
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE bouquets ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read bouquets (public links)
CREATE POLICY "Bouquets are publicly readable"
  ON bouquets FOR SELECT
  USING (true);

-- Allow anyone to insert bouquets (no auth required per PRD)
CREATE POLICY "Anyone can create bouquets"
  ON bouquets FOR INSERT
  WITH CHECK (true);

-- Create index on created_at for potential future queries
CREATE INDEX IF NOT EXISTS idx_bouquets_created_at ON bouquets (created_at DESC);

-- ==========================================
-- Done! Your database is ready.
-- ==========================================
