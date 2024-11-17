import React, { useState } from "react";
import logo from "../assets/logo.png";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flex flex-col bg-[#1E2A47] py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-[15px] lg:text-[20px] font-secondary">
            <p>NextGen-Solution</p>
            <a
              href="mailto:kontakt@nextgen-solution.pl"
              className="hover:text-[#9290C3] duration-300"
            >
              kontakt@nextgen-solution.pl
            </a>
            <button
              onClick={toggleModal}
              className="hover:text-[#9290C3] duration-300 text-left"
            >
              Polityka prywatności
            </button>
          </div>
          <div>
            <img
              className="w-[100px] h-[50px] lg:w-[300px] lg:h-[150px]"
              src={logo}
              alt=""
            />
          </div>
        </div>
        <div className="mx-auto text-center text-[10px] pt-5">
          <p>&copy; 2024 NextGen-Solution. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center"
          onClick={toggleModal}
        >
          <div
            className="bg-[#070E2B] w-[90%] lg:w-[600px] p-8 rounded-lg shadow-lg overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Polityka Prywatności</h2>
            <div className="container mx-auto text-[10px] lg:text-[12px] leading-3 lg:leading-4">
              <br />
              1. Informacje ogólne
              <br />
              Niniejsza Polityka Prywatności określa zasady przetwarzania danych
              osobowych pozyskanych od użytkowników przez stronę internetową
              NextGen-Solution dostępną pod adresem nextgen-solution.pl.
              <br />
              2. Administrator danych osobowych
              <br />
              Administratorem danych osobowych jest NextGen-Solution, kontakt:
              kontakt@nextgen-solution.pl.
              <br />
              3. Zakres zbieranych danych <br />
              Przetwarzamy następujące dane osobowe: Imię i nazwisko Adres
              e-mail Treść wiadomości przesłanej przez użytkownika. <br />
              4. Cel przetwarzania danych
              <br /> Dane osobowe przetwarzane są wyłącznie w celu realizacji
              zamówień, odpowiadania na zapytania oraz kontaktu związanego z
              realizacją zamówienia.
              <br />
              5. Podstawa prawna przetwarzania
              <br /> Podstawą prawną przetwarzania danych osobowych jest: Zgoda
              użytkownika – wyrażana przez dobrowolne przesłanie wiadomości z
              danymi osobowymi. Niezbędność przetwarzania danych do realizacji
              zamówienia, zgodnie z art. 6 ust. 1 lit. b RODO. 6. Okres
              przechowywania danych Dane osobowe będą przechowywane przez czas
              niezbędny do realizacji zamówienia oraz przez okres wymagany
              przepisami prawa lub do momentu wycofania zgody przez użytkownika.{" "}
              <br />
              7. Prawa użytkowników
              <br /> Użytkownicy mają prawo do: Dostępu do treści swoich danych
              oraz ich poprawiania. Usunięcia danych lub ograniczenia ich
              przetwarzania. Wycofania zgody na przetwarzanie danych osobowych w
              dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania
              dokonanego na podstawie zgody przed jej wycofaniem. Wniesienia
              skargi do organu nadzorczego, tj. Prezesa Urzędu Ochrony Danych
              Osobowych, w przypadku uznania, że przetwarzanie danych osobowych
              narusza przepisy prawa. <br />
              8. Przekazywanie danych
              <br /> Dane osobowe użytkowników nie będą udostępniane podmiotom
              trzecim, z wyjątkiem sytuacji, gdy będzie to niezbędne do
              realizacji zamówienia lub wymagane przepisami prawa.
              <br />
              10. Zmiany w Polityce Prywatności
              <br /> Zastrzegamy sobie prawo do wprowadzania zmian w Polityce
              Prywatności. O wszelkich zmianach użytkownicy zostaną
              poinformowani poprzez aktualizację niniejszej polityki na stronie
              internetowej. <br />
              11. Kontakt W przypadku pytań dotyczących niniejszej Polityki
              Prywatności lub przetwarzania danych osobowych prosimy o kontakt
              pod adresem: kontakt@nextgen-solution.pl.
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-[#535C91] text-white px-4 py-2 rounded-full"
                onClick={toggleModal}
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
