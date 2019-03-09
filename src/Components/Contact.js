import React from 'react';
import LazyHero from 'react-lazy-hero';

import './Home.css';
import Picture from'./Pics/Kontakt.jpg';

export default class Contact extends React.Component {

	componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
  		<div class>
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}>
					<div className= "HeroText"><h1> Kontakt und Datenschutz</h1> </div>
				</LazyHero>
				<div className="KontaktText">
				<h1> Angaben gemäß § 5 TMG: </h1>
				<br></br>

								<h2> Kontakt </h2>
								<p>	MarcelWepper(at)gmail.com </p>

								<h2>	 Streitschlichtung </h2>
								<p>	Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr </p>
								<p>	Unsere E-Mail-Adresse finden Sie oben im Impressum.  </p>
								<p>	Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. </p>

								<h2>	 Haftung für Inhalte </h2>
								<p>	Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. </p>

								<p>	Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. </p>

								<h2>	 Haftung für Links </h2>
								<p>	Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.  </p>

								<p>	Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. </p>

								<h2>	 Urheberrecht </h2>
								<p>	Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. </p>

								<p>	Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.  </p>

								<p>	Quelle: https://www.e-recht24.de/impressum-generator.html </p>

								<h2>	Datenschutzerklärung </h2>
								<p>	Verantwortliche Stelle im Sinne der Datenschutzgesetze ist: </p>

								<p>	Marcel-René Wepper</p>
								<p>	Eckenbertstraße 49</p>
								<p>	67549 Worms </p>

								<h2>	 Erfassung allgemeiner Informationen </h2>

								<p>	Wenn Sie auf unsere Webseite zugreifen, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet Service Providers und Ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen. Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an. Anonyme Informationen dieser Art werden von uns statistisch ausgewertet, um unseren Internetauftritt und die dahinter stehende Technik zu optimieren. </p>

								<h2>	 Kontaktformular </h2>

								<p>	Treten Sie per E-Mail oder Kontaktformular mit uns in Kontakt, werden die von Ihnen gemachten Angaben zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert. </p>

								<h2>	 Löschung bzw. Sperrung der Daten </h2>

								<p>	Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht. </p>

								<h2>	 Ihre Rechte auf Auskunft, Berichtigung, Sperre, Löschung und Widerspruch </h2>

								<p>	Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung, Löschung Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu an unseren Datenschutzbeauftragten. Die Kontaktdaten finden Sie ganz unten.  </p>

								<p>	Damit eine Sperre von Daten jederzeit berücksichtigt werden kann, müssen diese Daten zu Kontrollzwecken in einer Sperrdatei vorgehalten werden. Sie können auch die Löschung der Daten verlangen, soweit keine gesetzliche Archivierungsverpflichtung besteht. Soweit eine solche Verpflichtung besteht, sperren wir Ihre Daten auf Wunsch. </p>

								<p>	Sie können Änderungen oder den Widerruf einer Einwilligung durch entsprechende Mitteilung an uns mit Wirkung für die Zukunft vornehmen.  </p>

								<h3>	 Änderung unserer Datenschutzbestimmungen </h3>

								<p>	Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung. </p>

								<p>	Die Datenschutzerklärung wurde mit dem Datenschutzerklärungs-Generator der activeMind AG erstellt. </p>

								<h2> Verwendete Cookies und deren Zweck: </h2>
								<li>FontAwesome: </li>
								<li>GoogleAnalytics: </li>
				</div>
  		</div>
		);
	}
}
