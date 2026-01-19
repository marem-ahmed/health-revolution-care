import SectionContainer from "../Components/SectionContainer";
import { SecurityItem } from "../Components/SecurityItem";

export default function PrivacySecurity() {
  return (
    <SectionContainer title="Privacy & Security">
      <div className="space-y-4">
        <SecurityItem
          title="Connected Devices"
          description="See all devices that are currently logged into your account and remove any suspicious ones."
          action="Manage devices"
        />

        <SecurityItem
          title="Two-Factor Authentication"
          description="Add an extra layer of security by requiring a verification code when logging in."
          action="Enable 2FA"
        />

        <SecurityItem
          title="Download Your Data"
          description="Get a copy of your personal data including profile details and activity history."
          action="Download data"
        />
      </div>
    </SectionContainer>
  );
}
