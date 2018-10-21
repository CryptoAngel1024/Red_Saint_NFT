import React from 'react'
import styled from 'styled-components'
import { BsFillCircleFill } from 'react-icons/bs'
import { Helmet } from 'react-helmet'
const FanFictionContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  /* background: linear-gradient(90deg, rgba(193, 0, 0, 1) 0%, rgba(66, 1, 0, 1) 0%, rgba(193, 0, 0, 1) 100%); */
  padding: 2rem 0;
`

const HeadingContainer = styled.div`
  display: inline-block;
  padding: 0.2rem 4rem;
  border-bottom: 4px solid white;
`

const PageHeader = styled.h1`
  font-size: 3rem;
  text-align: left;
  color: #fff;
  font-family: 'Poppins';
  font-weight: 700;

  @media screen and (max-width: 550px) {
    font-size: 2rem;
  }
`

const CircleContainer = styled.div`
  color: white;
  position: relative;
  font-size: 0.6rem;
  top: 0.65rem;
  right: -20.5rem;

  @media screen and (max-width: 550px) {
    right: -15rem;
  }
`
const FanFictionText = styled.p`
  width: 100%;
  font-size: 1.4rem;
  font-family: 'Poppins';
  font-weight: 500;
  color: rgba(255, 255, 255, 0.87);
  padding: 1rem 4rem;
  line-height: 40px;

  @media screen and (max-width: 550px) {
    font-size: 1.1rem;
  }
`
const TextHeaders = styled.h2`
  font-size: 1.5rem;
  font-family: 'Poppins';
  font-weight: 700;
  margin: 2rem 0.2rem;
`

const FanFiction = () => {
  return (
    <FanFictionContainer>
      <Helmet>
        <title>FanFiction-Red Saint</title>
        <meta name="description" content="Fan Fiction page of Red saint" />
      </Helmet>
      <HeadingContainer>
        <PageHeader>Fan Fiction</PageHeader>
        <CircleContainer>
          <BsFillCircleFill />
        </CircleContainer>
      </HeadingContainer>
      <FanFictionText>
        <TextHeaders>Red Saint</TextHeaders>
        Red Saint, the eldest of Ohma Saint’s two sons was born during the period of war. The Saint’s opponents, the Devil’s, were constantly at war with Red
        Saint and his siblings as they grew up on the battlefield. Red Saint encountered Blue Devil, a boy of his age, during his scarce free time. Whether it
        was skipping stones or urinating in rivers, the two immediately developed a friendly competition, with Red Saint always prevailing. The habit of sending
        children to battle and die did not sit well with Red Saint. Red Saint and his brother, Yujisuma, agreed that a new ninja system would be needed to break
        the cycle of child deaths, a system that would necessitate a Saint-Devil alliance. Blue Devil, was a ninja just like Red Saint, who had lost many
        friends in war. Together, they imagined a world in which youngsters like themselves would not have to battle and their friends would be protected. Red
        Saint and Blue Devil kept their family names hidden as a precaution, but they eventually uncovered each other’s identities and got to know that it was
        their job to kill each other. Red Saint put off this duty since he didn’t want to endanger his friend’s life. Blue devil, on the other hand, concluded
        that their aspirations of a peaceful future were unrealistic and dissolved their alliance so that they might kill eachother without remorse. Over the
        years, the Red Saint and the Blue Devil continued to fight each other. The blue devil could never beat Red Saint’s superior talents, and Red Saint could
        never kill someone he still considered a friend. Both Blue devil and Red Saint rose to become chiefs of their respective clans over time. The Saint’s
        began to outperform the Devil Clan under Red Saint’s leadership, and at one time, Red Saint had both Blue Devil and his brother Gyunta at his mercy. Red
        Saint, however, unable to find the courage to kill his childhood friend, attempted to persuade Blue Devil to merge their two clans to accomplish their
        childhood ambitions. The blue devil was persuaded differently by a terminally wounded Gyunta, and they retreated, causing Red Saint to issue a
        cease-fire request. Even though other Devils were agreeing on the offer, Blue Devil refused to accept it when Yujisuma killed his last remaining
        sibling, Gyunta. The blue devil made one last struggle against Red Saint and but he was crushed again. Yujisuma attempted to kill Blue Devil to put an
        end to the battle, but Red Saint stopped him knowing that this would just increase the Saint-Devil feud. Red Saint wanted to kill himself along with his
        friend but Blue devil stopped him as the Red Saint was about to commit suicide, moved by the gesture he agreed to peace.
        <TextHeaders>The Creation Of ‘Paradise’</TextHeaders> The Saint’s and the Devil’s, and all of their allied tribes joined together to build a peaceful
        community where children would never have to fight. That place was given the name “Paradise” by Red Saint and Blue Devil, who were renewing their
        lifelong relationship. The rest of the world would soon follow Paradise’s lead and construct their own hidden villages. The blue devil was to become
        King and the village’s protector because it was his dream. At Yujisuma’s request, the King post was democratically elected, and Red Saint was ultimately
        chosen for the job. Red Saint desired Blue Devil’s cooperation as a brother and right hand for him to strengthen his standing among the peasants and
        eventually succeed him as Second King. That position, Blue Devil believed, would inevitably go to Yujisuma, which would be disastrous for the Devil’s
        because Yujisuma hated the Devil’s from the start and showed no mercy to them.
        <TextHeaders>Blue Devil’s Final Blow</TextHeaders>
        The blue devil started believing that the alliance was a failed experiment and abandoned it, intending to meet Red Saint in battle again sometime. The
        blue devil kept his word and assaulted Paradise on several occasions. With numerous fights under his belt, Blue Devil challenged Red Saint to one final
        battle. Red Saint tried to question Blue Devil for his actions throughout the battle, but Blue Devil persisted in battling until he was too exhausted.
        This allowed Red Saint to use a distraction and stab him in the back. Before collapsing, Blue Devil observed how much Red Saint had changed since they
        were kids. After the battle, Yujisuma burried Blue Devil’s body and they all began to live in peace but the Red Saint always had guilt in his heart for
        killing his childhood friend.
      </FanFictionText>
    </FanFictionContainer>
  )
}

export default FanFiction
