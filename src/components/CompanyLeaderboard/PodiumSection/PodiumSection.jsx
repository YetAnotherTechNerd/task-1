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
            minWidth: '58.516px',
            height: '27px',
            padding: '8px 20px',
            borderRadius: '999px',
            border: '1px solid rgb(253, 224, 71)',
            backgroundColor: 'rgb(254, 249, 195)',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '18px' }}>⭐</span>
          <Text
            weight="bold"
            style={{
              fontSize: '20px',
              color: 'rgb(202, 138, 4)',
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
            borderTop: '4px solid rgb(251, 191, 36)',
            borderRadius: '22px 22px 0 0',
            backgroundColor: 'rgb(253, 224, 71)',
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

  const borderColor = 'rgb(255, 255, 255)';
  const badgeColor = position === 2 ? 'rgb(148, 163, 184)' : 'rgb(249, 115, 22)';
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
          minWidth: '53.063px',
          height: '24px',
          padding: '6px 1px',
          boxSizing: 'border-box',
          borderRadius: '999px',
          border: '1px solid rgb(255, 255, 255)',
          backgroundColor: 'rgb(255, 255, 255)',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: '16px' }}>⭐</span>
        <Text
          weight="bold"
          style={{
            fontSize: '18px',
            color: 'rgb(14, 165, 233)',
          }}
        >
          {employee.points}
        </Text>
      </div>

      <div
        style={{
          width: '210px',
          height: pedestalHeight,
          borderTop: `4px solid ${borderColor}`,
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
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        alignItems: 'end',
      }}
    >
      <div style={{ order: 1 }}>
        <PodiumCard position={2} employee={topThree[1]} />
      </div>
      <div style={{ order: 0 }}>
        <PodiumCard position={1} employee={topThree[0]} />
      </div>
      <div style={{ order: 2 }}>
        <PodiumCard position={3} employee={topThree[2]} />
      </div>
    </div>
  );
};

export default PodiumSection;
