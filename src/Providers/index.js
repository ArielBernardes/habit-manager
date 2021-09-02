import { HabitsProvider } from "./habits/";
import { GroupsProvider } from "./groups";
import { UserProvider } from "./user";
import { AuthProvider } from "./auth";
import { CommunityProvider } from "./community";
import { ActivitiesProvider } from "./activity";
import { GoalsProvider } from "./goals";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <CommunityProvider>
          <GroupsProvider>
            <ActivitiesProvider>
              <GoalsProvider>
                <UserProvider>{children}</UserProvider>
              </GoalsProvider>
            </ActivitiesProvider>
          </GroupsProvider>
        </CommunityProvider>
      </HabitsProvider>
    </AuthProvider>
  );
};

export default Providers;
