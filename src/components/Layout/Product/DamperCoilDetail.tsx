import React from 'react';
import styled from 'styled-components';
import { OverviewCard } from './components';

const STDContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  overflow: scroll;
  padding: 24px 0;
`;

const DamperCoilDetail: React.FC = () => {
  return (
    <STDContainer>
      <OverviewCard
        title={'소개'}
        overview={
          '첨단화된 산업사회에서 생활하고 있는 우리의 주거생활에는 불가결한 냉방 및 난방에도 많은 관심을 기울여 공기조화설비에서도 급속한 발전을 거듭해 왔다. 하지만 겨울철 난방을 함에 있어서 공조기의 운전 중에 발생하는 온수 및 증기 코일의 빈번한 동파에 대해 동파방지 대안이나 그 해결점을 찾지 못하여 동절기 운전에 많은 어려움이 있었다.\n\n 특히 외기조화기나 환기조화기에서 발생하는 코일의 동파로 인하여 유지보수비나 교체비로 매년 많은 예산상의 낭비가 발생하고 있다.\n\n오래전부터 구미 선진국에서는 코일 동파의 해결방안으로 IFB 코일을 널리 보급해 왔으며, 우리나라에도 수 년 전부터 소개가 되어 지금은 널리 설치 보급되고 있는 추세이다. IFB 코일은 원리 및 구조가 간단하면서도 코일의 동파를 근원적으로 막아주며 뛰어난 열효율을 보장, 동파로 인한 유지보수 비용 및 교체 비용을 절감시켜주며, Preheating 또는 Heating 코일로도 적용 가능한 혁신적인 코일이라고 할 수 있다.'
        }
        marginBottom={36}
      />
      <OverviewCard
        title={'IFB (Integral Face and Bypass)'}
        overview={
          'IFB 코일 내에 항상 스팀이나 온수를 공급하면서 댐퍼콘트롤에 의해 토출온도를 제어하는 장치이다. 토출공기의 온도는 한번 설정되면 수시로 변하는 외기 온도에 상관없이 일정하게 유지된다. IFB 코일은 기존 코일의 변형이 아닌 독특한 장치로서 구조가 매우 간단하고 뛰어난 효율을 보장한다.'
        }
        marginBottom={36}
      />
      <OverviewCard
        overview={
          '병원, 학교, 일반빌딩 외조기의 예열 코일용 / 공장 등 환기가 필요한 곳의 급기용 / 보일러용 연소공기 예열용 / 기타 일반 난방 및 환기용 공조기의 히팅 코일용'
        }
        marginBottom={36}
      />
      <OverviewCard
        title={'IFB 동파방지 댐퍼코일의 구조'}
        overview={
          <>
            {
              'IFB 코일은 출고전 정밀검사, 시험을 거치므로 현장에서는 설치만 하면 된다.\n댐퍼작동용 연결봉(LINKAGE)은 정확한 댐퍼 개도유지와 비틀림이 전혀 없도록 고안한 간단하고 독특한 구조로 되어 있다.'
            }
            <img src="/image/product/freeze-protection-damper-coil/damper_coil_detail1.png" />
          </>
        }
        marginBottom={36}
      />
      <OverviewCard
        title={'작동원리'}
        overview={
          <>
            {
              'IFB 코일은 외기 온도의 변화에 상관없이 토출 공기 온도를 일정하게 유지하기 위하여 토출부에 Air Stream Thermostat을 장착하여 제어한다. 제어방법은 열 교환부와 Bypass부 면적을 상호 반비례하여 제어한다.\n\n열 교환부는 핀 튜브 구조이며 Bypass부는 가열되지 않은 외기를 통과시키도록 이루어져 있다. 코일을 통과한 공기와 열 교환 되지 않은 외기는 즉시 혼합되어 온도 편차가 없는 일정 온도의 공기 흐름을 형성한다.\n\n난방 전용에서 토출 공기 제어는 제어 밸브 없이 부드럽고 정확하게 이루어지며 인입 공기는 댐퍼에 의해 히팅부와 Bypass부의 통과량이 제어된다. Air-Flow-Line 댐퍼는 일정한 손실 정압을 유지하므로 댐퍼 개도와 관계없이 일정한 토출 공기량을 보장한다.'
            }
            <img src="/image/product/freeze-protection-damper-coil/damper_coil_detail2.png" />
          </>
        }
        marginBottom={36}
      />
      <OverviewCard
        title={'설치시 주의사항'}
        overview={
          'IFB 코일 내에 항상 스팀이나 온수를 공급하면서 댐퍼콘트롤에 의해 토출온도를 제어하는 장치이다. 토출공기의 온도는 한번 설정되면 수시로 변하는 외기 온도에 상관없이 일정하게 유지된다.\nIFB 코일은 기존 코일의 변형이 아닌 독특한 장치로서 구조가 매우 간단하고 뛰어난 효율을 보장한다.'
        }
        marginBottom={36}
      />
      <OverviewCard
        title={'덕트 연결'}
        overview={
          <>
            {
              'Coil의 성능 보장하는 동파의 기능성을 제거하기 위해서는 덕트를 설치하고 설치하는 방법을 올바르게 해야한다.\n덕트 연결시 덕트와 Coil의 경사도를 크게하면 한쪽을 공기 유속이 빠르고 반대쪽은 느려서 Coil 동파의 원인이 될 수도 있으므로 15℃ 이하가 되도록 해야한다.'
            }
            <img src="/image/product/freeze-protection-damper-coil/damper_coil_detail3.png" />
          </>
        }
        marginBottom={36}
      />
      <OverviewCard
        title={'엘보우 연결'}
        overview={
          <>
            {
              'Coil의 전후에 엘보우가 있는 경우에는 Turning Vane을 설치하여 불균일한 공기유속에 의한 동파 가능성을 배제해야한다.'
            }
            <img src="/image/product/freeze-protection-damper-coil/damper_coil_detail4.png" />
          </>
        }
        marginBottom={36}
      />
      <OverviewCard
        title={'공조기 내부 설치'}
        overview={
          <>
            {
              'IFB Coil 이후의 냉방코일이 있는 경우에는 최소 600mm 이상을 이격해야 한다\nIFB Coil 전방에 분무식 가습기가 설치될 때는 반드시 Moisture Eliminastor를 설치하여 Coil의 담파가 부식되지 않도록 해야한다.'
            }
            <img src="/image/product/freeze-protection-damper-coil/damper_coil_detail5.png" />
          </>
        }
      />
    </STDContainer>
  );
};

export default DamperCoilDetail;
