import SkeletonNpm from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Skeleton() {
  return (
    <div>
      <SkeletonNpm count={20} />
    </div>
  )
}
