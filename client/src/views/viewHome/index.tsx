import Header from 'components/header';

import SocialMedia from 'components/socialMedia';
import { EActiveView } from 'domains/enums/EActiveView';
import * as S from './styles';

const ViewHome = () => {
  return (
    <S.Container>
      <S.Header>
        <Header activeMenu={EActiveView.home} />
      </S.Header>
      <S.Body>
        <S.BaseDescription>
          <S.BSProfissional />
          <S.TitleFullStack />
          <S.Title>
            Passionate about innovation through programming, with solid
            technical experience and emphasis on collaboration in
            multidisciplinary teams.
          </S.Title>
        </S.BaseDescription>
        <S.PhotoBS />
        <SocialMedia />
      </S.Body>
      {
        <S.UpdateContent>
          <S.UpdateBase>
            <S.UpdateTitle>Update</S.UpdateTitle>
            <S.UpdateValue>10/2023</S.UpdateValue>
          </S.UpdateBase>
        </S.UpdateContent>
      }
    </S.Container>
  );
};

export default ViewHome;
