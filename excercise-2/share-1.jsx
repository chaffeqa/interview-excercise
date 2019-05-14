import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/buttons.styled";
import { EmailIcon } from "../../../components/icons/EmailIcon";
import { FacebookIcon } from "../../../components/icons/FacebookIcon";
import { TwitterIcon } from "../../../components/icons/TwitterIcon";
import Modal, { ModalWrapper } from "../../../components/modal";
import { GAME_UIDS, GAME_URLS } from "../../../constants/games";
import Omniture from "../../../utils/omniture";
import ShareLink from "../../Groups/components/ShareLink";

const socialReferrerLink = (href) => encodeURIComponent(href);


export default class ChampModal extends React.Component {

  public render() {
    const { isOpen, toggleModal } = this.props;
    const gameUid = GAME_UIDS.NBA_BRACKET;
    const gameUrl = typeof(window) !== "undefined"  ? `${window.location.origin}${GAME_URLS[GAME_UIDS[gameUid]]}` : "";
    const fbShareUrl = typeof(window) !== "undefined" ? `https://www.facebook.com/sharer/sharer.php?u=${socialReferrerLink(`${gameUrl}`)}` : undefined;
    const twShareUrl = typeof(window) !== "undefined" ? `https://twitter.com/share?url=${socialReferrerLink(`${gameUrl}`)}` : undefined;
    const subjectLine = "My NBA Pick'EM: Bracket Challenge Group";
    const emailBody = ` I%20played%20NBA%20Pick%20’Em:%20Playoffs%20Bracket%20Challenge%20Presented%20by%20’47!%20Think%20you%20can%20beat%20me?%20Play%20now%20for%20a%20chance%20to%20win%20big!%0d%0a%0d%0a%0d%0aPlay%20now:%20${gameUrl}%0d%0a%0d%0aGet%20your%20picks%20in%20now%20to%20compete%20against%20your%20friends,%20build%20up%20points,%20and%20play%20for%20prizes!%0d%0a%0d%0aNo Purchase Necessary. Must be 18+ to enter. See website for full rules.`;

    return (
      <Modal isOpen={isOpen} afterClose={() => toggleModal(false)} analyticsPageName="invite-to-group">
        <ModalWrapper gameUid={GAME_UIDS.NBA_BRACKET}>
          <div>
            <h3>NBA Pick Em: Bracket Challenge</h3>
            <p>Invite your friends to play!</p>
            <div className="share-type">
              <div className="share">
                <a target="_blank" href={fbShareUrl} onClick={() => Omniture.trackInteraction(`invite:facebook`, "event54")}>
                  <div className="icon"><FacebookIcon /></div>
                  <div className="copy">Invite via Facebook</div>
                </a>
              </div>
              <div className="share">
                <a target="_blank" href={twShareUrl} onClick={() => Omniture.trackInteraction(`invite:twitter`, "event54")}>
                  <div className="icon"><TwitterIcon /></div>
                  <div className="copy">Invite via Twitter</div>
                </a>
              </div>
              <div className="share">
                <a
                  target="_blank"
                  href={`mailto:?subject=${subjectLine}&body=${emailBody}`}
                  onClick={() => Omniture.trackInteraction(`invite:email`, "event54")}
                >
                  <div className="icon"><EmailIcon /> </div>
                  <div className="copy">Invite via Email</div>
                </a>
              </div>
            </div>
            <div className="share-link">
              <ShareLink gameUrl={gameUrl} onCopy={() => Omniture.trackInteraction(`invite:copy`, "event54")}/>
            </div>
        </div>
        </ModalWrapper>
      </Modal>
    );
  }
}
