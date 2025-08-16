"use client";

import React from "react";
import Accordion from "../../components/Accordion";

export default function AccordionTestPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "30px", textAlign: "center" }}>
        아코디언 컴포넌트 테스트
      </h1>

      <Accordion title="기본 아코디언 (기본적으로 열림)">
        <p>
          이 아코디언은 기본적으로 열린 상태입니다. 헤더를 클릭하면 닫힙니다.
          열린 상태에서는 좌측에 X 아이콘이 표시됩니다.
        </p>
        <p>
          아코디언 내용은 자유롭게 작성할 수 있으며, HTML 요소도 포함할 수
          있습니다.
        </p>
      </Accordion>

      <Accordion title="닫힌 상태로 시작하는 아코디언" defaultOpen={false}>
        <p>
          이 아코디언은 기본적으로 닫힌 상태입니다. 헤더를 클릭하면 열립니다.
        </p>
        <ul>
          <li>리스트 아이템 1</li>
          <li>리스트 아이템 2</li>
          <li>리스트 아이템 3</li>
        </ul>
      </Accordion>

      <Accordion title="긴 내용을 포함한 아코디언">
        <p>아코디언은 긴 내용도 자연스럽게 표시할 수 있습니다.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div
          style={{
            background: "#f8f9fa",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "15px",
          }}
        >
          <strong>특별한 스타일링:</strong> 아코디언 내용에는 다양한 스타일을
          적용할 수 있습니다.
        </div>
      </Accordion>

      <Accordion title="코드 예시를 포함한 아코디언">
        <p>아코디언 컴포넌트 사용법:</p>
        <pre
          style={{
            background: "#f1f3f4",
            padding: "15px",
            borderRadius: "6px",
            overflow: "auto",
            fontSize: "14px",
          }}
        >
          {`<Accordion title="제목" defaultOpen={true}>
  <p>아코디언 내용</p>
</Accordion>`}
        </pre>
      </Accordion>

      <Accordion title="마지막 아코디언">
        <p>
          이것은 마지막 아코디언입니다. 모든 아코디언이 독립적으로 작동하며,
          하나를 열어도 다른 것들은 영향을 받지 않습니다.
        </p>
        <button
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => alert("버튼이 클릭되었습니다!")}
        >
          테스트 버튼
        </button>
      </Accordion>
    </div>
  );
}
