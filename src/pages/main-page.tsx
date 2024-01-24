import { CalendarTime } from '../features/calendar-time';
import { MainLayout } from '../widgets/layouts/main-layout';

export default function MainPage() {
  return (
    <MainLayout>
      <CalendarTime />
    </MainLayout>
  );
}
