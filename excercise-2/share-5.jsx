import React, { Component } from "react";
import styled from "styled-components";
import { EmailIcon } from "../../../components/icons/EmailIcon";
import { FacebookIcon } from "../../../components/icons/FacebookIcon";
import { TwitterIcon } from "../../../components/icons/TwitterIcon";
import { GAME_UIDS, GAME_URLS } from "../../../constants/games";
import Omniture from "../../../utils/omniture";
import ShareLink from "./ShareLink";

const socialReferrerLink = (href) => encodeURIComponent(href);


export default class SocialShare extends Component {
  public render() {
    const { gameUid, group, joinToken } = this.props;
    const gameUrl = typeof(window) !== "undefined"  ? `${window.location.origin}${GAME_URLS[GAME_UIDS[gameUid]]}/groups/${group.group_id}${joinToken ? `/join/${joinToken}` : ""}` : "";

    const fbShareUrl = typeof(window) !== "undefined" ? `https://www.facebook.com/sharer/sharer.php?u=${socialReferrerLink(`${gameUrl}`)}` : undefined;
    const twShareUrl = typeof(window) !== "undefined" ? `https://twitter.com/share?url=${socialReferrerLink(`${gameUrl}`)}` : undefined;

    // tslint:disable-next-line:max-line-length
    const w6emailBody = `NBA%20Pick%20'Em:%20Weekly%206%20is%20your%20chance%20to%20win%20every%20week!%0d%0a%0d%0aJoin:%20${group.name}%0d%0aPlay%20now:%20${gameUrl}%0d%0a%0d%0aGet%20your%20picks%20in%20now%20to%20compete%20against%20your%20friends,%20build%20up%20points,%20and%20play%20for%20the%20$1%20million%20grand%20prize!%0d%0a%0d%0aNo Purchase Necessary. Must be 18+ to enter. See website for full rules.`;
    const w6SubjectLine = `My NBA Pick 'Em: Weekly 6 Group`;
    // tslint:disable-next-line:max-line-length
    const PTPemailBody = `NBA%20Pick%20'Em:%20Primetime%20Picks%20is%20your%20chance%20to%20win%20every%20day!%0d%0a%0d%0aJoin:%20${group.name}%0d%0aPlay%20now:%20${gameUrl}%0d%0a%0d%0aGet%20your%20picks%20in%20now%20to%20compete%20against%20your%20friends,%20build%20up%20points,%20and%20play%20for%20prizes!%0d%0a%0d%0aNo Purchase Necessary. Must be 18+ to enter. See website for full rules.`;
    const PTPSubjectLine = `My NBA Pick 'Em: Primetime Picks Group`;
    const bracketSubjectLine = "My NBA Pick 'Em: Bracket Challenge Group";
    // tslint:disable-next-line:max-line-length
    const bracketEmailBody = `NBA%20Pick%20'Em:%20Bracket%20Challenge%20is%20your%20chance%20to%20win!%0d%0a%0d%0aJoin:%20${group.name}%0d%0aPlay%20now:%20${gameUrl}%0d%0a%0d%0aGet%20your%20picks%20in%20now%20to%20compete%20against%20your%20friends,%20build%20up%20points,%20and%20play%20for%20prizes!%0d%0a%0d%0aNo Purchase Necessary. Must be 18+ to enter. See website for full rules.`;
    const defaultSubjectLine = "My NBA Pick'EM Group";
    // tslint:disable-next-line:max-line-length
    const defaultEmailBody = `NBA%20Pick%20'Em%20Games%20%20are%20your%20chance%20to%20win!%0d%0a%0d%0aJoin:%20${group.name}%0d%0aPlay%20now:%20${gameUrl}%0d%0a%0d%0aGet%20your%20picks%20in%20now%20to%20compete%20against%20your%20friends,%20build%20up%20points,%20and%20play%20for%20prizes!%0d%0a%0d%0aNo Purchase Necessary. Must be 18+ to enter. See website for full rules.`;

    let subjectLine;
    let emailBody;

    switch (gameUid) {
      case GAME_UIDS.NBA_WEEKLY_SIX:
        subjectLine = w6SubjectLine;
        emailBody = w6emailBody;
        break;
      case GAME_UIDS.NBA_PRIMETIME_PICKS:
        subjectLine = PTPSubjectLine;
        emailBody = PTPemailBody;
        break;
      case GAME_UIDS.NBA_BRACKET:
        subjectLine = bracketSubjectLine;
        emailBody = bracketEmailBody;
        break;
      default:
        subjectLine = defaultSubjectLine;
        emailBody = defaultEmailBody;
        break;
    }

    return (
      <div>
      <h4>Send Group Invite</h4>
      <p>Invite your friends to join your group <span>{group.name}</span></p>
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
    );
  }
}
