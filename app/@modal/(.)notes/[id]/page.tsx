import { fetchNoteById } from '@/lib/api';
import RouteInterceptorModal from '@/components/Modal/RouteInterceptorModal';
import NotePreview from '@/components/NotePreview/NotePreview';

interface PreviewProps {
  params: Promise<{ id: string }>;
}

export default async function NoteShowPreview({ params }: PreviewProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);
  return (
    <>
      <RouteInterceptorModal>
        <NotePreview note={note} />
      </RouteInterceptorModal>
    </>
  );
}
