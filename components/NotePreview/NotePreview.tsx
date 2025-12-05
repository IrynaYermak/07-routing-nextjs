'use client';
import css from './NotePreview.module.css';
import { useRouter } from 'next/navigation';
import { Note } from '@/types/note';

type NotePreviewProps = {
  note: Note;
};

export default function NoteDetails({ note }: NotePreviewProps) {
  const noteData = note.updatedAt
    ? `Updated at: ${note?.updatedAt}`
    : `Created at: ${note?.createdAt}`;

  const router = useRouter();
  const close = () => router.back();

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.tag}>{note.tag}</p>
        <p className={css.date}>{noteData}</p>
        <button className={css.backBtn} onClick={close}>
          Go back
        </button>
      </div>
    </div>
  );
}
