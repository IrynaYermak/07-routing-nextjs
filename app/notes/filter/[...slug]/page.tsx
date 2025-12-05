import { fetchNotesByTag } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

type PropsFilter = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesByTag({ params }: PropsFilter) {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];
  const response = await fetchNotesByTag({ tag });

  return (
    <section>
      {response?.notes?.length === 0 && (
        <div>
          <p>No notes found for your request.</p>
        </div>
      )}
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}
