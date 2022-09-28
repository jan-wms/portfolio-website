import React from 'react'
import * as styles from './headerGraphic.module.css'
import { FaHeart } from "@react-icons/all-files/fa/FaHeart"
import { FaComments } from "@react-icons/all-files/fa/FaComments"
import { FaGlobeAmericas } from "@react-icons/all-files/fa/FaGlobeAmericas"
import { FaSquareRootAlt } from "@react-icons/all-files/fa/FaSquareRootAlt"
import { IoMdPerson } from "@react-icons/all-files/io/IoMdPerson"
import { RiSettings4Fill } from "@react-icons/all-files/ri/RiSettings4Fill"
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
    <section className={styles.icons}>
      {/*left*/}
      <FaHeart style={{ left: '0', top: '250', color: '#de5b5b' }} />
      <FaComments style={{ left: '30', top: '280', color: '#de5b5b' }} />
      <FaGlobeAmericas style={{ left: '0', top: '250', color: '#de5b5b' }} />
      <FaFolder style={{ left: '30', top: '220', color: '#de5b5b' }} />
      <BsClock style={{ left: '60', top: '190', color: '#de5b5b' }} />
      <AiOutlineWifi style={{ left: '0', top: '250', color: '#de5b5b' }} />
      <BsFillCameraVideoFill style={{ left: '0', top: '250', color: '#de5b5b' }} />
      <AiOutlineZoomIn style={{ left: '0', top: '250', color: '#de5b5b' }} />
      <FaArrowRight style={{ left: '60', top: '310', color: '#de5b5b' }} />

      {/*slash*/}
      <IoPhonePortraitOutline style={{ left: '235', top: '160', color: '#de5b5b' }} />
      <IoIosSunny style={{ left: '220', top: '190', color: '#d7de5b' }} />
      <IoIosMail style={{ left: '205', top: '220', color: '#5fcde8' }} />
      <FaSquareRootAlt style={{ left: '190', top: '250', color: '#ffff' }} />
      <FaVolumeUp style={{ left: '175', top: '280', color: '#de5b5b' }} />
      <HiOutlineCode style={{ left: '160', top: '310', color: '#ffff' }} />
      <GiMountainClimbing style={{ left: '145', top: '340', color: '#70a36d' }} />
      <IoMdPerson style={{ left: '130', top: '370', color: '#858585' }} />

      {/*right*/}
      <MdThumbUp style={{ left: '300', top: '340', color: '#de5b5b' }} />
      <FaBook style={{ left: '300', top: '160', color: '#de5b5b' }} />
      <FaMountain style={{ left: '330', top: '310', color: '#de5b5b' }} />
      <FaRunning style={{ left: '330', top: '190', color: '#de5b5b' }} />
      <FaPen style={{ left: '360', top: '280', color: '#de5b5b' }} />
      <RiSettings4Fill style={{ left: '360', top: '220', color: '#de5b5b' }} />
      <IoMdMusicalNote style={{ left: '390', top: '250', color: '#de5b5b' }} />
      <FaPlane style={{ left: 'calc(50% - 2.5rem)', top: 'calc(50% - 2.5rem)', color: '#de5b5b', fontSize: '5rem' }} />


    </section>
  )
}

export default HeaderGraphic