'use client';

import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send');
      }

      setForm({
        name: '',
        email: '',
        message: '',
      });

      alert('Message sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
   <form
  onSubmit={handleSubmit}
  className="
    border-1
    border-[#C5C9AD]
    bg-white
    rounded
    p-4
    flex
    flex-col
    gap-3
    w-full
    lg:w-[60%]
    self-start
    dark:bg-[#131313]
  "
>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex flex-col gap-1 flex-1">
      <label
        htmlFor="name"
        className="text-[12px] font-semibold text-[#444934]"
      >
        NAME
      </label>

      <input
        type="text"
        name="name"
        id="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Adam Smith"
        className="
          border-1
          border-[#C5C9AD]
          rounded
          pt-1
          pb-1
          pl-2
          pr-2
          outline-none
          w-full
          md:min-w-[250px]
          transition-colors
          duration-200
          focus:border-[#526600]
        "
        required
      />
    </div>

    <div className="flex flex-col gap-1 flex-1">
      <label
        htmlFor="email"
        className="text-[12px] font-semibold text-[#444934]"
      >
        EMAIL
      </label>

      <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={handleChange}
        placeholder="adamsmith@gmail.com"
        className="
          border-1
          border-[#C5C9AD]
          rounded
          pt-1
          pb-1
          pl-2
          pr-2
          outline-none
          w-full
          md:min-w-[250px]
          transition-colors
          duration-200
          focus:border-[#526600]
        "
        required
      />
    </div>
  </div>

  <div>
    <label
      htmlFor="message"
      className="text-[12px] font-semibold text-[#444934]"
    >
      MESSAGE
    </label>

    <br />

    <textarea
      name="message"
      id="message"
      rows={6}
      value={form.message}
      onChange={handleChange}
      placeholder="How can I help you?"
      className="
        p-3
        border-1
        border-[#C5C9AD]
        resize-none
        rounded
        outline-none
        w-full
        transition-colors
        duration-200
        focus:border-[#526600]
      "
      required
    />
  </div>

  <button
    type="submit"
    disabled={loading}
    className="
      rounded
      pt-2
      pb-2
      pr-4
      pl-4
      flex
      items-center
      justify-center
      gap-2
      bg-[#D4FF33]
      self-start
      transition-colors
      duration-200
      hover:bg-[#acc92b]
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
  >
    <span className="text-[#5E7400]">
      {loading ? 'SENDING...' : 'SEND MESSAGE'}
    </span>

    <MdSend fill="#5E7400" />
  </button>
</form>
  );
}