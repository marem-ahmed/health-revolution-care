import { NotificationItem } from "../Components/NotificationItem";
import SectionContainer from "../Components/SectionContainer";

export default function Notifications() {
  return (
    <SectionContainer title="Notifications">
      <div className="space-y-4">
        <NotificationItem
          title="Email Notifications"
          description="Receive important updates and reminders directly to your email inbox."
          defaultChecked
        />

        <NotificationItem
          title="SMS Notifications"
          description="Get urgent alerts and confirmations via text messages."
        />

        <NotificationItem
          title="Push Notifications"
          description="Stay updated with real-time notifications on your device."
          defaultChecked
        />
      </div>
    </SectionContainer>
  );
}
