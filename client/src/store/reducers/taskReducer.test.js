import reducer from './taskReducer';
import * as actionTypes from '../actions/actionTypes';

describe('Task Reducer', () => {

  const tasks = [
    {
      "id": 1234567,
      "title": "task1",
      "description": "lorem ipsum faln filan \"Neredesin Firuze\" gerçek bir Unkapanı hikayesidir. Günümüzde tamamen çökmüş olan CD-kaset piyasasının bir zamanlar altın devrini yaşadığı günlerin artık yavaş yavaş geride kalmaya yüz tuttuğu günlerin habercisi verimsiz günlerde geçen film, müzik piyasasında pek başarılı olamayan ve bu sebeple de nihayet bir borç yığını içine düşen Hayri ve Osman’ın hikayesine odaklanır. Bir çıkış yolu arayışı içerisinde, Sansar adlı menajerin önerdiği bir sözde genç yeteneğe ulaşmaya çalışırlar. Bu genç yetenek Ferhat o sırada Almanya’da yaşamaktadır. Kendisinin sesini telefonda dinleyerek çok beğenen ikili, hemen plan yaparlar. Ferhat ülkeye geldiğinde onunla yapacakları kaset üzerinden kazanacakları para ile borçlarını ödeyeceklerdir. Ferhat geldikten sonra ortaya bir de zengin bir kadın çıkar. Gizemli Firuze, Ferhat’ı çok beğenir ve ona yatırım yapmak istediğini söyler... Filmin yönetmenliğini o dönem kendisine Ezop lakabı takan Ezel Akay üstlenirken, kadro Demet Akbağ, Özcan Deniz, Cem Özer, Haluk Bilginer, Ruhi Sari ve Şebnem Dönmez gibi birbirinden renkli isimlerden oluşuyordu."
    },
    {
      "id": 213,
      "title": "task1",
      "description": "günlerde geçen film, müzik piyasasında pek başarılı olamayan ve bu sebeple de nihayet bir borç yığını içine düşen Hayri ve Osman’ın hikayesine odaklanır. Bir çıkış yolu arayışı içerisinde, Sansar adlı menajerin önerdiği bir sözde genç yeteneğe ulaşmaya çalışırlar. Bu genç yetenek Ferhat o sırada Almanya’da yaşamaktadır. Kendisinin sesini telefonda dinleyerek çok beğenen ikili, hemen plan yaparlar. Ferhat ülkeye geldiğinde onunla yapacakları kaset üzerinden kazanacakları para ile borçlarını ödeyeceklerdir. Ferhat geldikten sonra ortaya bir de zengin bir kadın çıkar. Gizemli Firuze, Ferhat’ı çok beğenir ve ona yatırım yapmak istediğini söyler... Filmin yönetmenliğini o dönem kendisine Ezop lakabı takan Ezel Akay üstlenirken, kadro Demet Akbağ, Özcan Deniz, Cem Özer, Haluk Bilginer, Ruhi Sari ve Şebnem Dönmez gibi birbirinden renkli isimlerden oluşuyordu."
    },
  ];

  const error = {
    message: 'something went wrong'
  };

  it('FETCH_TASKS_REQUEST action', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.FETCH_TASKS_REQUEST,
      }),
    ).toEqual({
      isLoading: true,
      error: null,
      task: null,
      tasks: []
    });
  })

  it('FETCH_TASKS_SUCCESS action', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.FETCH_TASKS_SUCCESS,
        tasks
      }),
    ).toEqual({
      tasks,
      isLoading: false,
      error: null,
      task: null
    });
  })

  it('FETCH_TASKS_FAILURE action', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.FETCH_TASKS_FAILURE,
        error
      }),
    ).toEqual({
      isLoading: false,
      error,
      task: null,
      tasks: []
    });
  })
});