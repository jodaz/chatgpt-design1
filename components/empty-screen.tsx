import React from 'react';

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4 text-center mb-8">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-0 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold">
          Chat GPT
        </h1>
        <p className="leading-normal text-zinc-400">
          Ver 4.0 Mar 14
        </p>
      </div>
    </div>
  )
}
