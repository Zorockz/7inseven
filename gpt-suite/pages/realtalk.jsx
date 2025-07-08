import React, { useState } from "react";

export default function RealTalk() {
  const [input, setInput] = useState("");
  const [tone, setTone] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setReply("");
    try {
      const res = await fetch("/api/realtalk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, tone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Unknown error");
      setReply(data.reply);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h1>RealTalk Advice</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="What's on your mind?"
          rows={4}
          required
        />
        <input
          value={tone}
          onChange={e => setTone(e.target.value)}
          placeholder="Tone (e.g. supportive, blunt, gentle)"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Thinking..." : "Get Real Advice"}
        </button>
      </form>
      {error && <div style={{ color: "red", marginTop: 12 }}>{error}</div>}
      {reply && (
        <div style={{ marginTop: 24, padding: 16, background: "#f9f9f9", borderRadius: 6 }}>
          <strong>Advice:</strong>
          <div style={{ marginTop: 8 }}>{reply}</div>
        </div>
      )}
    </div>
  );
}
