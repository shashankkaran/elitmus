import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import Sudoku from "./Sudoku";
import Score from "./Score";

export default function Game() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row items-center justify-center py-2 w-screen mainDiv">
            <div className="w-9/12 flex flex-col items-center justify-center">
              <Sudoku email={user.email} />
            </div>
            <div className="w-6/12 flex flex-col items-center justify-center">
              <Score email={user.email} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
