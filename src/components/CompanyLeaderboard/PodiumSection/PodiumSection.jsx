import React from 'react';
import { Text } from '@fluentui/react-components';

const PodiumCard = ({ position, employee }) => {
  if (!employee) return null;

  if (position === 1) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          justifyContent: 'flex-end',
        }}
      >
        <div style={{ position: 'relative' }}>
          <div
            style={{
              width: '120px',
              height: '120px',
              boxSizing: 'border-box',
              borderRadius: '50%',
              border: '4px solid rgb(251, 191, 36)',
              backgroundColor: 'var(--app-surface-muted)',
              backgroundImage: employee.avatar ? `url(${employee.avatar})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              width: '36px',
              height: '36px',
              boxSizing: 'border-box',
              borderRadius: '50%',
              border: '4px solid rgb(255, 255, 255)',
              backgroundColor: 'rgb(234, 179, 8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgb(255, 255, 255)',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            1
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Text
            weight="bold"
            style={{
              fontSize: '24px',
              color: 'rgb(15, 23, 42)',
              display: 'block',
            }}
          >
            {employee.name} {employee.surname}
          </Text>
          <Text
            style={{
              fontSize: '14px',
              color: 'rgb(100, 116, 139)',
              display: 'block',
            }}
          >
            {employee.position}
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: '104.38px',
            height: '41px',
            padding: '0',
            boxSizing: 'border-box',
            borderRadius: '999px',
            border: '1px solid #fde047',
            backgroundColor: '#fef9c3',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '18px', color: '#ca8a04', lineHeight: '1' }}>★</span>
          <Text
            weight="bold"
            style={{
              fontSize: '20px',
              color: '#ca8a04',
            }}
          >
            {employee.points}
          </Text>
        </div>

        <div
          style={{
            width: '280px',
            height: '178px',
            boxSizing: 'border-box',
            borderTop: '2px solid #fde047',
            borderRadius: '22px 22px 0 0',
            background: 'linear-gradient(180deg, #fef3c7, #fde68a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '112px',
              fontWeight: 'bold',
              color: 'rgba(234, 179, 8, 0.2)',
              lineHeight: '1',
            }}
          >
            1
          </div>
        </div>
      </div>
    );
  }

  const borderColor = '#cbd5e1';
  const badgeColor = position === 2 ? 'rgb(148, 163, 184)' : '#92400e';
  const pedestalHeight = position === 2 ? '142px' : '118px';
  const pedestalLabel = position === 2 ? '2' : '3';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        justifyContent: 'flex-end',
      }}
    >
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            border: '3px solid rgb(255, 255, 255)',
            backgroundColor: 'var(--app-surface-muted)',
            backgroundImage: employee.avatar ? `url(${employee.avatar})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '3px solid rgb(255, 255, 255)',
            backgroundColor: badgeColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          {pedestalLabel}
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Text
          weight="bold"
          style={{
            fontSize: '18px',
            color: 'rgb(15, 23, 42)',
            display: 'block',
          }}
        >
          {employee.name} {employee.surname}
        </Text>
        <Text
          style={{
            fontSize: '13px',
            color: 'rgb(100, 116, 139)',
            display: 'block',
          }}
        >
          {employee.position}
        </Text>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          width: '90.53px',
          height: '35px',
          padding: '0',
          boxSizing: 'border-box',
          borderRadius: '999px',
          border: '1px solid #e2e8f0',
          backgroundColor: 'rgb(255, 255, 255)',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: '16px', color: '#0ea5e9', lineHeight: '1' }}>★</span>
        <Text
          weight="bold"
          style={{
            fontSize: '18px',
            color: '#0ea5e9',
          }}
        >
          {employee.points}
        </Text>
      </div>

      <div
        style={{
          width: '210px',
          height: pedestalHeight,
          borderTop: `2px solid ${borderColor}`,
          borderRadius: '22px 22px 0 0',
          background: 'linear-gradient(rgb(226, 232, 240), rgb(203, 213, 225))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            fontSize: '92px',
            fontWeight: 'bold',
            color: 'rgba(148, 163, 184, 0.2)',
            lineHeight: '1',
          }}
        >
          {pedestalLabel}
        </div>
      </div>
    </div>
  );
};

const PodiumSection = ({ topThree }) => {
  if (!topThree || topThree.length === 0) {
    return null;
  }

  return (
    <div
      className="podium-layout"
      style={{
        gap: '24px',
        alignItems: 'end',
        marginLeft: '120px',
        marginRight: '120px',
        marginBottom: '64px',
      }}
    >
      <div className="podium-place podium-place-first">
        <PodiumCard position={1} employee={topThree[0]} />
      </div>
      <div className="podium-place podium-place-second">
        <PodiumCard position={2} employee={topThree[1]} />
      </div>
      <div className="podium-place podium-place-third">
        <PodiumCard position={3} employee={topThree[2]} />
      </div>
    </div>
  );
};

export default PodiumSection;
