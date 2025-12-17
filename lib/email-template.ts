interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export function contactEmailTemplate(data: ContactEmailData) {
  return `
  <div style="font-family:Arial, sans-serif; background:#f5f5f5; padding:24px;">
    <div style="
        max-width:600px;
        margin:auto;
        background:#ffffff;
        padding:24px;
        border-radius:8px;
    ">
        <div style="margin-bottom:30px;">
            <div style="
                font-size:20px;
                font-weight:600;
                letter-spacing:0.3em;
                color:#111;
            ">
                VENTURI
            </div>

            <div style="
                font-size:12px;
                letter-spacing:0.5em;
                color:#777;
                margin-top:6px;
            ">
                VISUALS
            </div>
            </div>

                <h2 style="
                color:#111;
                font-weight:500;
                font-size:18px;
                margin:30px 0 16px;
            ">
            📩 Novo contato pelo site
            </h2>

            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>

            ${data.phone ? `<p><strong>Telefone:</strong> ${data.phone}</p>` : ""}
            ${data.projectType ? `<p><strong>Tipo de projeto:</strong> ${data.projectType}</p>` : ""}

            <hr style="margin:20px 0;border:none;border-top:1px solid #eee;" />

            <p><strong>Mensagem:</strong></p>
            <p style="white-space:pre-line; line-height:1;">
             ${data.message}
            </p>

            <hr style="margin:20px 0;border:none;border-top:1px solid #eee;" />

            <p style="font-size:12px;color:#666;">
                Email enviado automaticamente pelo formulário do site.
            </p>
        </div>
    </div>
  `;
}
