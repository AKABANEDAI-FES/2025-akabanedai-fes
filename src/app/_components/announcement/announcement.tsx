import { Dialog } from "@ark-ui/react/dialog";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { linkButton } from "@/components/ui/link-button";
import { Text } from "@/components/ui/text";
import styles from "./announcement.module.css";

export function Announcement() {
  return (
    <Dialog.Root defaultOpen>
      <Dialog.Backdrop className={styles.backdrop} />
      <Dialog.Positioner className={styles.positioner}>
        <Dialog.Content className={styles.dialog}>
          <Dialog.CloseTrigger className={styles.close} aria-label="閉じる">
            <XIcon />
          </Dialog.CloseTrigger>
          <div className={styles.content}>
            <Heading as="h2" variant="secondary">
              今年度の赤羽台祭は終了しました
            </Heading>
            <Text className={styles.message}>
              ご来場いただきありがとうございました。来年度もぜひご来場ください。
            </Text>
            <Link className={linkButton()} href="/contest">
              企画コンテスト結果を見る
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}
