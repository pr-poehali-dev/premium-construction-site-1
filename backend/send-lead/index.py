import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """
    Business: Принимает заявку с сайта и пересылает в Telegram админа.
    Args: event с httpMethod, body (name, phone, service, comment)
    Returns: HTTP-ответ с подтверждением
    """
    method: str = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    body_raw = event.get('body', '{}')
    try:
        data = json.loads(body_raw) if body_raw else {}
    except json.JSONDecodeError:
        data = {}

    name = str(data.get('name', '')).strip()
    phone = str(data.get('phone', '')).strip()
    service = str(data.get('service', '')).strip() or '—'
    comment = str(data.get('comment', '')).strip() or '—'

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    bot_token = '8313439147:AAEIEO-Z-V_PgufIgUFY5omesj09h9oQRgc'
    chat_id = '722623121'

    service_labels = {
        'roofing': 'Кровельные работы',
        'foundation': 'Фундаментные работы',
        'finishing': 'Отделочные работы',
        'facade': 'Фасадные работы',
        'fence': 'Заборы и ограждения',
        'paving': 'Плиточные работы',
        'gazebo': 'Беседки и террасы',
        'banya': 'Бани',
    }
    service_text = service_labels.get(service, service)

    message = (
        'Новая заявка с сайта:\n'
        f'Имя: {name}\n'
        f'Телефон: {phone}\n'
        f'Вид работ: {service_text}\n'
        f'Комментарий: {comment}'
    )

    tg_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    payload = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': message,
    }).encode('utf-8')

    try:
        req = urllib.request.Request(tg_url, data=payload, method='POST')
        with urllib.request.urlopen(req, timeout=10) as response:
            response.read()
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'})
        }

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        'body': json.dumps({'success': True, 'message': 'Заявка принята'})
    }
