import { useState } from "react";
import { Send } from "lucide-react";
import { LINKS } from "./data";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const field =
    "w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-ring focus:outline-none";

  return (
    <form
      className="grid gap-4 rounded-xl border border-border bg-card p-6 shadow-card"
      onSubmit={(e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "visitor"}`);
        const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
        window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Name</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={field}
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={field}
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${field} resize-y`}
          placeholder="Tell me about the role, project, or opportunity."
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Send className="size-4" /> Send message
        </button>
        {sent && (
          <span className="text-sm text-muted-foreground" role="status">
            Your email client should now be open with the message ready.
          </span>
        )}
      </div>
    </form>
  );
}
