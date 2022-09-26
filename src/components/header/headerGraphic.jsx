import React from 'react'
import * as styles from './headerGraphic.module.css'
import { FaHeart } from "@react-icons/all-files/fa/FaHeart"
import { FaComments } from "@react-icons/all-files/fa/FaComments"
import { FaGlobeAmericas} from "@react-icons/all-files/fa/FaGlobeAmericas"
import { FaSquareRootAlt} from "@react-icons/all-files/fa/FaSquareRootAlt"
import { IoMdPerson} from "@react-icons/all-files/io/IoMdPerson"
import { RiSettings4Fill} from "@react-icons/all-files/ri/RiSettings4Fill"
import { FaRunning } from "@react-icons/all-files/fa/FaRunning"
import { FaFolder } from "@react-icons/all-files/fa/FaFolder"
import { IoIosSunny } from "@react-icons/all-files/io/IoIosSunny"
import { FaMountain } from "@react-icons/all-files/fa/FaMountain"
import { IoIosMail } from "@react-icons/all-files/io/IoIosMail"
import { BsClock } from "@react-icons/all-files/bs/BsClock"
import { AiOutlineWifi } from "@react-icons/all-files/ai/AiOutlineWifi"
import { IoMdMusicalNote } from "@react-icons/all-files/io/IoMdMusicalNote"
import { BsFillCameraVideoFill } from "@react-icons/all-files/bs/BsFillCameraVideoFill"
import { MdThumbUp } from "@react-icons/all-files/md/MdThumbUp"
import { AiOutlineZoomIn } from "@react-icons/all-files/ai/AiOutlineZoomIn"
import { FaPen } from "@react-icons/all-files/fa/FaPen"
import { FaVolumeUp } from "@react-icons/all-files/fa/FaVolumeUp"
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight"
import { HiOutlineCode } from "@react-icons/all-files/hi/HiOutlineCode"
import { IoPhonePortraitOutline } from "@react-icons/all-files/io5/IoPhonePortraitOutline"
import { FaBook } from "@react-icons/all-files/fa/FaBook"
import { FaPlane } from "@react-icons/all-files/fa/FaPlane"

import { GiMountainClimbing } from 'react-icons/gi'

const HeaderGraphic = () => {
  return (
    <div className={styles.headerGraphic}>
      <FaHeart />
      <FaComments />
      <FaGlobeAmericas />
      <FaSquareRootAlt />
      <IoMdPerson />
      <RiSettings4Fill />
      <FaRunning />
      <FaFolder />
      <IoIosSunny />
      <FaMountain />
      <GiMountainClimbing />
      <IoIosMail />
      <BsClock />
      <AiOutlineWifi />
      <IoMdMusicalNote />
      <BsFillCameraVideoFill />
      <MdThumbUp />
      <AiOutlineZoomIn />
      <FaPen />
      <FaVolumeUp />
      <FaArrowRight />
      <HiOutlineCode />
      <IoPhonePortraitOutline />
      <FaBook />
      <FaPlane />
    </div>
  )
}

export default HeaderGraphic