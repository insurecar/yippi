import { h } from 'preact'

const PrivacyDeclaration = ({ isShown, setIsShown, company }) => {
  const { name, legalName, registrationNumber, location = {} } = company
  const address = [location.zipCode, location.country, location.city, location.address]
    .filter(el => el)
    .join(', ')

  const handleModalDropClick = e => {
    if (e.target === e.currentTarget) setIsShown(false)
  }

  return (
    <div
      className={`modal-container ${isShown ? 'visible' : ''}`}
      onClick={handleModalDropClick}
    >
      <div className="modal privacy-declaration">
        <button className="close-modal" type="button" onClick={() => setIsShown(false)}>
          &times;
        </button>

        <h1>Retningslinjer for personvern</h1>
        <p>
          Disse retningslinjene gjelder behandlingen av personopplysninger som er
          innhentet på denne nettsiden og behandles av {legalName}
          {registrationNumber ? `, org nr ${registrationNumber} ` : ''}
          {address ? `, ${address} ` : ''} (heretter «{name}» eller «vi»).
        </p>

        <p>
          Vi er behandlingsansvarlig for behandlingen av dine personopplysninger. Vi bryr
          oss om ditt personvern og er forpliktet til å beskytte dine personopplysninger.
          Disse retningslinjene redegjør for hvilken informasjon vi samler inn, vår
          behandling av dine personopplysninger og dine rettigheter.
        </p>

        <p>
          Marketer Technologies AS («Marketer») vil drifte denne nettsiden, og vil
          behandle dine personopplysninger på våre vegne. De er dermed vår databehandler.
        </p>

        <h2>Hva er formålet med behandlingen?</h2>
        <p>
          Nettsiden promoterer et boligprosjekt, med mål om å spre informasjon om
          prosjektet, formidle kontaktforespørsler og registrere mulige interessenter for
          oppdragsgiver. Vårt formål med å behandle dine personopplysninger er å kunne
          tilby deg relevant informasjon, samt å kunne kontakte deg. Vi vil ikke benytte
          dine personopplysninger til andre formål med mindre du samtykker til det.
        </p>

        <h2>Hvilken informasjon samles inn og behandles?</h2>
        <p>
          Informasjonen som samles inn og behandles om deg er den informasjonen som du
          selv velger å dele med oss ved å fylle ut og sende inn for eksempel
          kontaktskjema, påmelding til nyhetsbrev eller hvis du registrerer deg som
          interessent for en bolig eller et prosjekt.
        </p>

        <p>
          Denne informasjonen kan inkludere ditt navn, adresse, postnummer, poststed,
          e-postadresse, telefonnummer, kommentarer, samtykker, boligen(e) du er
          interessert i og lignende.
        </p>

        <h2>Hva er behandlingsgrunnlaget?</h2>
        <p>
          Det er frivillig for de som besøker nettsiden å oppgi personopplysninger i
          forbindelse med tjenester som å motta nyhetsbrev, melde sin interesse for et
          prosjekt eller en bolig osv. Vårt behandlingsgrunnlag for behandlingen av dine
          personopplysninger er ditt samtykke (GDPR art. 6.1.a), at behandlingen er
          nødvendig for å oppfylle en avtale med deg (GDPR art. 6.1.b) eller at
          behandlingen er i nødvendig for formål knyttet til våre berettigede interesser
          (GDPR art. 6.1.f).
        </p>

        <p>
          All bruk av våre tjenester er frivillig. Du kan på ethvert tidspunkt trekke
          tilbake ditt samtykke ved at du tar kontakt med oss eller Marketer gjennom
          kontaktopplysningene oppgitt i denne erklæringen. Slik tilbaketrekking kan
          eventuelt begrenses til kun å gjelde deler av behandlingen, for eksempel det som
          gjelder mottakelse av nyhetsbrev.
        </p>

        <h2>Hvordan oppbevares og deles dine personopplysninger?</h2>
        <p>
          Vi behandler dine personopplysninger så lenge vi er pålagt ved lov, frem til du
          trekker tilbake ditt samtykke, eller til det ikke lenger er nødvendig for
          formålene som nevnt ovenfor. Oppbevaring utover dette vil kun forekomme der
          dette er pålagt oss etter lov eller vedtak fra offentlig myndighet.
        </p>

        <p>
          I tillegg til Marketer (som drifter denne nettsiden) vil vi eller Marketer kunne
          engasjere tredjeparter for å kunne levere tjenester til deg, f.eks. til å sende
          ut nyhetsbrev og prospekter. I slike tilfeller vil det inngås
          databehandleravtaler med tredjepartene hvor det sørges for at deres behandling
          av dine personopplysninger skjer i tråd med disse retningslinjene og det til
          enhver tid gjeldene personvernregelverk.
        </p>

        <p>
          Dine personopplysninger vil også deles og benyttes internt i vår selskapskjede,
          dvs. i {name}.
          <br />
          Dine personopplysninger vil også deles med tredjeparter i den grad dette er
          pålagt oss etter loven eller vedtak fra offentlig myndighet.
        </p>

        <h2>Hvilke rettigheter har den registrerte og hvilket lands lovverk gjelder?</h2>
        <p>
          I den grad vi behandler personopplysninger om deg har du rett på innsyn i egne
          opplysninger, og til å kreve begrenset eller motsette deg visse former for
          behandling. Du har også rett til å motta dine personopplysninger i et
          strukturert, alminnelig anvendt og maskinleselig format, og til å overføre
          personopplysningene dine til en annen behandlingsansvarlig (dataportabilitet).
          Dersom personopplysningene er uriktige, ufullstendige eller det ikke er adgang
          til å behandle dem, kan du også be oss om å rette eller slette opplysningene. Du
          har også rett til å klage til Datatilsynet på behandling i strid med reglene.
        </p>

        <h2>Hvordan sikres opplysningene?</h2>
        <p>
          Vi tilstreber at all kommunikasjon og lagring skjer i tråd med etablerte
          standarder og praksiser for sikkerhet, blant annet ved bruk av SSL-kryptering
          der dette er støttet, samt å kun benytte anerkjente underleverandører som
          ivaretar våre krav til sikkerhet og inngå databehandleravtaler der dette er
          nødvendig eller hensiktsmessig.
        </p>

        <p>
          Dersom et (mulig) brudd på personvernreglene oppdages vil vi kontakte de
          berørte, samt Datatilsynet, i den grad slik varsling er påkrevd etter
          personopplysningslovigvningen.
        </p>

        <h2>Kontaktinformasjon</h2>
        <p>
          Hvis du ønsker å få innsyn, rette eller slette dine personopplysninger, utøve
          dine rettigheter eller har andre spørsmål knyttet til behandlingen av
          personopplysninger, ta kontakt med Marketer på support@marketer.tech
        </p>
      </div>
    </div>
  )
}

export default PrivacyDeclaration
