import { Suspense} from "react";
import { GoPlus } from "react-icons/go";
import Loading from "./loading.jsx";
import MainBody from "../../components/ui/bodyUi/MainBody.jsx";

const friendsP = async () => {
  const res = await fetch('https://keenkeeper-ph.vercel.app//friends.json', {
    cache: 'no-store'
  });
  return res.json()
}

async function Home() {
  const friendsPromise = friendsP()
  console.log(friendsPromise);
  return (
    <div className="p-24 flex flex-col justify-between items-center gap-8">
      <div className="flex flex-col justify-center items-center gap-4 text-black text-center">
        <h2 className="text-3xl">Friends to keep close in your life</h2>
        <p className="opacity-[0.7]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <button className="btn bg text-white rounded-md"><GoPlus /> Add a Friend</button>
      </div>

      <Suspense fallback={<Loading />}>
        <MainBody friendsPromise={friendsPromise} />
      </Suspense>
    </div>
  )
}

export default Home